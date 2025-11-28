const ProductPrice = ({value, className} : {value : number; className?:string}) => {
// ensures two decimal places 
    const stringValue = value.toFixed(2);
    // splits into intiger and decimal parts 
    const [intValue, floatValue ] = stringValue.split('.');
    return (<p className={cn ('text-2xl', className)}>
        <span className="text-xs allign-super">$</span>
        {intValue}
        <span className="text-xs allign-super">.{floatValue}</span>
        
          </p>  );
}
 
export default ProductPrice;