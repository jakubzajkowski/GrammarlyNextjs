import { HandleEditEmail } from "@/app/helpers/EditEmail"
import { HandleEditName } from "@/app/helpers/EditName"
import { HandleEditPassword } from "@/app/helpers/EditPassword"

export type SettingFunctionName = (email:string,newName:string,errorServer:React.Dispatch<React.SetStateAction<string>>)=>void
export type SettingFunctionPassword = (password: string,email: string,newPassword:string,errorServer:React.Dispatch<React.SetStateAction<string>>)=>void
export type SettingFunctionEmail = (password: string,email: string,newEmail:string,errorServer:React.Dispatch<React.SetStateAction<string>>)=>void


export interface SettingListType<args>{
    title: string
    placeholder0: string
    placeholder1: string
    editFunction: args
}

export const SettingsList:[SettingListType<SettingFunctionName>,SettingListType<SettingFunctionPassword>,SettingListType<SettingFunctionEmail>] = [
    {
        title: 'Update Name',
        placeholder0: 'Email',
        placeholder1: 'New name',
        editFunction: (email:string,newName:string,errorServer:React.Dispatch<React.SetStateAction<string>>)=>{HandleEditName(email,newName,errorServer)},
    },
    {
        title: 'Update Password',
        placeholder0: 'Password',
        placeholder1: 'New password',
        editFunction: (password: string,email: string,newPassword:string,errorServer:React.Dispatch<React.SetStateAction<string>>)=>{HandleEditPassword(password,email,newPassword,errorServer)},
    },
    {
        title: 'Update Email',
        placeholder0: 'New email',
        placeholder1: 'Password',
        editFunction: (password: string,email: string,newEmail:string,errorServer:React.Dispatch<React.SetStateAction<string>>)=>{HandleEditEmail(password,email,newEmail,errorServer)},
    }
]