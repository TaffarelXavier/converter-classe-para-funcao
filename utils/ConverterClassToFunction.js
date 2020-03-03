/*
 this.setState\(state\s+\=\>\s+\(\{\n+\s+.*?\n+\s+?\}\)\)\;
*/
/**
 *
 * @param {*} entrada
 */

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const converterClassToFunction = entrada => {
  //
  let arr = entrada.split("\n");

  if (!entrada.length) return "O código está em branco";

  let saida = "";

  let className = "";

  arr.map((linha, index) => {
    let classe = linha.match(/class\s+(\w+)/);

    if (Boolean(linha.match(/this\.props\.\w+/gm))) {
      //
      saida += linha.replace(/this\.(props\.(\w+))/gm, "$1") + "\n";
    } else if (Boolean(classe)) {
      //
      className = classe[1];
      saida += `const ${className} = (props) => {\n`;
    } else if (Boolean(linha.match(/\s+?render\(\)\s+{/gm))) {
      //
      saida += "\n";
    } else if (Boolean(linha.match(/constructor\(.*?\)\s+\{/gm))) {
      //
      linha.replace(/constructor\(.*?\)\s+\{/gm, "");
    } else if (Boolean(linha.match(/super\(props\)\;/gm))) {
      //
      linha.replace(/super\(props\)\;/gm, "");
    } else if (Boolean(linha.match(/\s+?this\.state\s+\=/gm))) {
      //Meus hooks:
      let objHooks = linha
        .replace(/\s+?this\.state\s+\=/gm, "")
        .trim()
        .replace(/^\{/, "");

      var properties = objHooks.replace("};", "").split(", ");

      let obj = "\n";

      properties.forEach(function(property) {
        //
        let tup = property.split(":");

        let objHook = tup[0].trim();

        let valorInicialHook = tup[1];

        //Para verificar se o valor é array
        if (valorInicialHook.match(/(\[\])|(\[\s+\])/)) {
          obj += `\tconst [${objHook}, set${objHook.capitalize()}] = useState(${valorInicialHook.trim()});\n`;
        } else {
          //demais valores:
          obj += `\tconst [${objHook}, set${objHook.capitalize()}] = useState(${valorInicialHook.trim()});\n`;
        }
      });

      saida += obj + "\n";
    } else if (
      Boolean(linha.match(/(\s+?this\.\w+|(this\.\w+\(\))|state\.\w+)/gm))
    ) {
      //
      let data = linha.match(/(\s+?this\.\w+|(this\.\w+\(\))|state\.\w+)/gm);

      if (data) {
        data.map(el => {
          if (el.trim().startsWith("state")) {
            saida += el.replace(/state.(\w+)/, "{$1}");
          } else if (el.trim().startsWith("this")) {
            saida += el.replace(/this\.(\w+)/, "{$1}");
          }
        });
      }
    } else if (
      new RegExp(className).test(linha) ||
      /document\.getElementById\(.*?\)/.test(linha) ||
      /ReactDOM\.render\(/.test(linha)
    ) {
    } else {
      saida += linha + "\n";
    }
  });

  let text = saida.replace(/\}\n\}/, "\n}\n");

  console.log(text);

  text += `export default ${className}`;

  return text.replace("}  );", ";");
};

export default converterClassToFunction;


