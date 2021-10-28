const { codegen } = require("swagger-axios-codegen");

codegen({
  methodNameMode: "operationId",
  //  주소
  remoteUrl: "http://localhost:3000/api-json",
  //  아웃 파일
  outputDir: `./src/swagger`,
  useStaticMethod: true,
});

// npm
// npm install --save swagger-axios-codegen
