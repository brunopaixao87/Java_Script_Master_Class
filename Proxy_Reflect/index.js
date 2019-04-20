/**
 * Proxy - Um proxy é capaz de iterceptar diversos
 * tipos de operações em um objeto alvo
 *
 * Existem métodos, chamados de trap(armadilhas), para diversos tipo de eventos
 * relacionados a um objeto como: apply, construct, defineProperty, deleteProperty,
 * get, getOwnPropertyDescriptor, getPropertyOf
 * has, isExtensible, ownKeys, preventExtensions, set, setPrototypeOf
 */

//interceptando as operações
function createArray() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0;
        target.length++;
        target[key] = value;
      },
      get(target, key) {
        if (typeof key === "string" && key.match(/\d+/)) {
            if(!(key in target)){
                throw `Property ${key} not found`;
            }
        }
        return target[key];
      },
      deleteProperty(target, key) {
        if (key in target) {
          delete target[key];
          --target.length;
        }
      }
    }
  );
}

const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";
console.log(languages);
console.log(languages.length);
delete languages[1];
delete languages[2];
delete languages[3];
console.log(languages);
console.log(languages.length);

/**
 * A Reflect API tem os mesmos métodos que existem
 * no Proxy, permitindo a execução de diversos tipos
 * de operações no objeto alvo, tem os mesmos métodos do proxy
 */

function createArrayReflection() {
    return new Proxy(
      {},
      {
        set(target, key, value) {
          target.length = target.length || 0;
          target.length++;
          Reflect.set(target, key, value);
        },
        get(target, key) {
          if (typeof key === "string" && key.match(/\d+/)) {
              if(!Reflect.has(target, key)){
                  throw `Property ${key} not found`;
              }
          }
          return Reflect.get(target, key);
        },
        deleteProperty(target, key) {
          if (Reflect.has(target, key)) {
            Reflect.deleteProperty(target, key);
            --target.length;
          }
        }
      }
    );
  }
  
  const languagesReflect = createArrayReflection();
  languagesReflect[0] = "Python";
  languagesReflect[1] = "Ruby";
  languagesReflect[2] = "JavaScript";
  console.log(languagesReflect);
  console.log(languagesReflect.length);
  delete languagesReflect[1];
  delete languagesReflect[2];
  delete languagesReflect[3];
  console.log(languagesReflect);
  console.log(languagesReflect.length);
  
