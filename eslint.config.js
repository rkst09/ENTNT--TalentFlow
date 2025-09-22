import js from '@eslint/js'
<<<<<<< HEAD
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
=======



import globals from 'globals'


import reactHooks from 'eslint-plugin-react-hooks'


import reactRefresh from 'eslint-plugin-react-refresh'


import tseslint from 'typescript-eslint'


import { globalIgnores } from 'eslint/config'





export default tseslint.config([


  globalIgnores(['dist']),


  {


    files: ['**/*.{ts,tsx}'],


    extends: [


      js.configs.recommended,


      tseslint.configs.recommended,


      reactHooks.configs['recommended-latest'],


      reactRefresh.configs.vite,


    ],


    languageOptions: {


      ecmaVersion: 2020,


      globals: globals.browser,


    },


  },


])
>>>>>>> 7738358021bb403ddbeb9846b44af15dad35bff0
