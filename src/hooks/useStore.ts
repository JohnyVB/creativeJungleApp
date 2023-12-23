import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import { Store } from '../interfaces/store.type';
import { Supplier } from '../interfaces/supplier.interface';
import { Products } from '../interfaces/product.interface';

export const useStore = create<Store>((set) => ({
    suppliers: [
        {
            id: uuid(),
            suppCode: 'SUPP001',
            name: 'Proveedor 1',
            image: 'suppliers.png',
            desc: 'descripcion'
        },
        {
            id: uuid(),
            suppCode: 'SUPP002',
            name: 'Proveedor 2',
            image: 'suppliers.png',
            desc: 'descripcion'
        },
        {
            id: uuid(),
            suppCode: 'SUPP003',
            name: 'Proveedor 3',
            image: 'suppliers.png',
            desc: 'descripcion'
        },
        {
            id: uuid(),
            suppCode: 'SUPP004',
            name: 'Proveedor 4',
            image: 'suppliers.png',
            desc: 'descripcion'
        }
    ],
    products: [
        {
            id: uuid(),
            prodCode: 'PROD001',
            name: 'Producto 1',
            image: 'products.png',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: uuid(),
            prodCode: 'PROD002',
            name: 'Producto 2',
            image: 'products.png',
            desc: 'descripcion'
        },
        {
            id: uuid(),
            prodCode: 'PROD003',
            name: 'Producto 3',
            image: 'products.png',
            desc: 'descripcion'
        },
        {
            id: uuid(),
            prodCode: 'PROD004',
            name: 'Producto 4',
            image: 'products.png',
            desc: 'descripcion'
        }
    ],
    addSupp: (suppCode: string, name: string, desc: string) => set((state: any) => ({
        suppliers: [...state.suppliers, { id: uuid(), suppCode, name, desc }]
    })),
    removeSupp: (id: string) => set((state: any) => ({
        suppliers: state.suppliers.filter((item: Supplier) => item.id !== id)
    })),
    addProd: (prodCode: string, name: string, desc: string) => set((state: any) => ({
        products: [...state.products, { id: uuid(), prodCode, name, desc }]
    })),
    removeProd: (id: string) => set((state: any) => ({
        products: state.products.filter((item: Products) => item.id !== id)
    })),
}))



