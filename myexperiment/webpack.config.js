const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'], // Add .tsx here
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // Update to handle .tsx
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
