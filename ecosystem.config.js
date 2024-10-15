module.exports = {
  apps: [
    {
      name: 'futurescape-client',
      script: 'node_modules/.bin/next',
      args: 'start',
      cwd: '/home/administrator/Futurescape-24',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        AUTH_TOKEN: "dafjiuodsahufihadsiouafguyadshgfhuiadshfujihsuiadhfjdsahiufgjsaikofhuidshfguasfhiuodhsaiofhbndsaiuafghiodasuhfuyiasfghjmnadsjkvhbuyxchfklawnfeiu2817478345645923u68342ty6766438974hsdawvcmsdanhfiudhsuf",
        MONGODB_URI: "mongodb+srv://futurescape24lavasa:1PfwNVVTksTJ2MAC@cluster1.fyoot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1",
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
