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
        icon:"ti-shopping-cart",
        title:"Product",
        submenu:[
            {
                name:"Add Product",
                path:"/addproduct"
            },
            {
                name:"Manage Product",
                path:"/product/"
            }
        ]
    },
    {
        icon:"icon-wallet",
        title:"Dispatch",
        submenu:[
            {
                name:"Sell",
                path:"/sell"
            },
            {
                name:"Eway",
                path:"/eway"
            },
            {
                name:"Return",
                path:"/return"
            }
        ]
    },
    {
        icon:"ti-printer",
        title:"Transaction",
        submenu:[
            {
                name:"Sell",
                path:"/transaction"
            },
            {
                name:"Purchase",
                path:"/transaction"
            },
             {
                name:"Return",
                path:"/transaction"
            }
        ]
    }
    
]
export default MenuList;