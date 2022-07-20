const fs = require("fs");
const colors = require('colors');

/* const crearArchivo = (base = 5) => {
  console.log("===================================");
  console.log(`    Tabla del ${base}   `);
  console.log("===================================");

  let salida = "";

  for (let i = 1; i <= 12; i++) {
    salida += `${base} x ${i} = ${base * i} \n`;
  }

  console.log(salida);

    //fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
    //  if(err) throw err;
    //  console.log(`tabla-${base}.txt created`)
    //})

  return new Promise((resolve, reject) => {
    try {
      let nombreArchivo = `tabla-${base}.txt`;
      fs.writeFileSynca(nombreArchivo, salida);
      resolve(nombreArchivo);
    } catch (err) {
      reject(err);
    }
  });
}; */

const crearArchivo = async (base = 5, listar = true,hasta = 12) => {
    
  
    try{
        let salida = "",salida2="";
  
        for (let i = 1; i <= hasta; i++) {
          salida += `${base} ${'x'.red} ${i} ${'='.green} ${base * i} \n`;
          salida2 += `${base} x ${i} = ${base * i} \n`;
        }
      
        if(listar){
            console.log("===================================".blue);
            console.log(`    Tabla del ${base}  `.bold);
            console.log("===================================".blue);
            console.log(salida)
        }
      
        let nombreArchivo = `tabla-${base}.txt`;
        fs.writeFileSync(`./salida/${nombreArchivo}`, salida2);

        return nombreArchivo;
    }catch(err){
        throw err;
    }  
  };

module.exports = {
  crearArchivo,
};
