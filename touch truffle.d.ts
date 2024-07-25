declare module "truffle" {
  export const artifacts: {
    require(contractName: string): any;
  };
}
