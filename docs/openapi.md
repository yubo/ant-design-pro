# openapi - ant

## config

在 `config/config.ts` 中配置 openAPI 的相关配置。

```typescript
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      // 或者使用在线的版本
      // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
      schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
```

运行, 生成相关接口和文档

```
$ npm run openapi 
```


## usage

```sh
# with mock
$ npm run start

# without mock
$ npm run start:dev
```


## 参考

- https://pro.ant.design/zh-CN/docs/openapi 
