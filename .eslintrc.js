module.exports = {
    'parserOptions': {
        'ecmaVersion': 11,
        'sourceType': 'module'
    },
    'plugins': [
        'import', 'wdio'
    ],
    'rules': {
        quotes: ['error', 'single'],
        'import/no-unresolved': [
            2,
            {
                'commonjs': true,
                'amd': false,
                'caseSensitive': true,
            }
        ]
    },'extends': 'plugin:wdio/recommended'
}