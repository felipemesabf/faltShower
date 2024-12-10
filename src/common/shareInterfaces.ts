import {PropsWithChildren} from "react";

export type ChildrenComponent<T> = PropsWithChildren<T>;

export type Products = { 
    id: number, 
    name: string, 
    reserved: boolean
}