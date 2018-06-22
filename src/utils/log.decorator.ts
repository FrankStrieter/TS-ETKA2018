export function log(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  let originalMethod: any = descriptor.value;

  descriptor.value = function(...args: any[]): any {
    //pre
    console.log('function started');
    let result: any = originalMethod.apply(this, args);
    // post
    console.log('function finished');
    // return
    console.log('the returnValue is: ' + result.name);
    result;
  };
  return descriptor;
}
