import React from "react";
const Logo = ()=>{
    return(
        <div className="logo">
            {/* les images importer depuis le fichier img comme si j'etait dans "public"*/}
            <img className="widthLogo" src="../img/logo192.png" alt="titre react"/>
            
        <h2>React Words</h2>
        </div>
    );
};

export default Logo ;