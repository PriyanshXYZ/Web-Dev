function helpfn(){
    console.log(`List of all the commands -
                1)Tree Command-node FileOrg.js tree <dirname>
                2)Organize -node FileOrg.js organise <dirname>
                3)Help - node FileOrg.js`)
}

module.exports ={
    helpFnKey: helpfn
}