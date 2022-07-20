/* const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type:'number',
                    demandOption: true
                })
                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                        throw new Error('La base tiene q ser un numero')
                    }
                    return true;
                })
                .argv; */

const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe:'Es la base de la tabla de multiplicar'
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      describe:'Muestra la tabla en consola'
    },
    h: {
        alias: "hasta",
        type: "number",
        default: 12,
        describe:'hasta q numero multiplicar'
      },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("La base tiene q ser un numero");
    }
    return true;
  }).argv;

  module.exports = argv;
