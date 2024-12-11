import {PropsWithChildren} from "react";

export type ChildrenComponent<T> = PropsWithChildren<T>;

export type Products = { 
    id: number, 
    name: string, 
    reserved: boolean,
    whoSelect: string,
    urlImg: string
}

export type User = {
    id: number, 
    name: string, 
    psw:string,
    reserved: boolean
}
