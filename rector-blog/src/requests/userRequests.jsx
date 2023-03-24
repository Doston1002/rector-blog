import { clientApi } from "../utils/api";

export async function getUsers({obj}) {
    return clientApi({...obj})
}