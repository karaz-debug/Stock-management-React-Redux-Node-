const MenuList = [
    {
        icon:"icon-home",
        title:"Dashboard",
        path:"/",
        submenu:[
            {
                name:"Home",
                path:"/"
            },
            {
                name:"My Profile",
                path:"/register"
            }
        ]
    },
    {
        icon:"icon-briefcase",
        title:"Supplier",
        submenu:[
            {
                name:"Add Supplier",
                path:"/addsupplier"
            },
            {
                name:"Supplier List",
                path:"/supplier"
            }
        ]
    },
    {
        icon:"icon-energy",
        title:"Inventory",
        submenu:[
            {
                name:"Add Inventory",
                path:"/addproduct"
            },
            {
                name:"Manage Inventory",
                path:"/product/"
            }
        ]
    },
    {
        icon:"icon-user",
        title:"Customer",
        submenu:[
            {
                name:"Add Customer",
                path:"/addcustomer"
            },
            {
                name:"Manage Customer",
                path:"/customer"
            }
        ]
    },
    {
        icon:"icon-wallet",
        title:"Product",
        submenu:[
            {
                name:"Sell",
                path:"/sell"
            },
            {
                name:"Transaction",
                path:"/transaction"
            }
        ]
    }
    
]
export default MenuList;