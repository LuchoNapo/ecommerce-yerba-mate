
import { Menu } from "lucide-react";
import {  Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return ( 
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/category/con-palo" className="block">Con palo</Link>
                <Link href="/category/sin-palo" className="block">Sin palo</Link>
            </PopoverContent>
        </Popover>
     );
}
 
export default ItemsMenuMobile;