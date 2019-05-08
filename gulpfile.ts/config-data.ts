
import { Config } from './common/config';

function gulpConfig(): Config {
    return {
        resjson: {
            resourceName: 'AltRhombusCMTrace',
            localeOffset: 0,
            localePath: 'loc'
        },
        powershell: {
            name: 'altrhombus.cmtrace',
            guid: '517ebcc2-7a13-49c5-8f3c-859ed0762e84',
            list: [
                'src',
                'node_modules/@microsoft/windows-admin-center-sdk'
            ],
            enablePester: false,
            skipCim: true
        },
        test: {
            skip: true
        }
    };
}

exports.gulpConfig = gulpConfig;
