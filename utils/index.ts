import {FormKitNode} from "@formkit/core";
import {AxiosError} from "axios";

export function handleInvalidForm(e: any, node: FormKitNode){
    if(e instanceof AxiosError && e.response?.status === 422){
        node.setErrors([], e.response.data.errors);
    }
}