import { Products } from "./product.interface";
import { Supplier } from "./supplier.interface";

export type Store = {
    suppliers: Supplier[],
    products: Products[],
    addSupp: (name: string, desc: string, suppCode: string) => void,
    removeSupp: (id: string) => void,
    addProd: (name: string, desc: string, prodCode: string) => void,
    removeProd: (id: string) => void,
}