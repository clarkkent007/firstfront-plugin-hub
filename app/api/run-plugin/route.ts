import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import { pluginMap } from '@/plugins';
import { PluginResult } from '@/types/plugin';

const execAsync = promisify(exec);

export async function POST(request: NextRequest): Promise<NextResponse<PluginResult>> {
  try {
    const { pluginId } = await request.json();

    if (!pluginId || typeof pluginId !== 'string') {
      return NextResponse.json(
        {
          success: false,
          output: '',
          error: 'Invalid plugin ID',
        },
        { status: 400 }
      );
    }

    // Validate plugin exists
    const plugin = pluginMap[pluginId];
    if (!plugin) {
      return NextResponse.json(
        {
          success: false,
          output: '',
          error: 'Plugin not found',
        },
        { status: 404 }
      );
    }

    // Execute copilot CLI command
    const command = `copilot "${plugin.copilotPrompt}"`;
    
    let stdout = '';
    let stderr = '';

    try {
      const result = await execAsync(command, {
        timeout: 30000,
        maxBuffer: 10 * 1024 * 1024,
      });
      stdout = result.stdout;
      stderr = result.stderr;
    } catch (error: any) {
      // Handle timeout and other execution errors
      if (error.killed) {
        return NextResponse.json(
          {
            success: false,
            output: '',
            error: 'Command execution timed out (30s limit)',
          },
          { status: 500 }
        );
      }
      
      stdout = error.stdout || '';
      stderr = error.stderr || error.message || 'Unknown error';
    }

    const output = stdout || stderr || 'No output generated';

    return NextResponse.json({
      success: true,
      output,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        output: '',
        error: error?.message || 'Internal server error',
      },
      { status: 500 }
    );
  }
}
