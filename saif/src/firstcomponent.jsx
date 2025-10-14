function Header() {
    return(
        <>
        <h1>My name is saif</h1>
        <Fruit/>
        <Colour/>
        </>
    )
}
function Fruit(){
    return(
        <h2>Apple</h2>
    )
}
function Colour(){
    return(
        <>
        <h5>this is red color: {sum()}</h5>
        </>
    )
}
function sum(){
    return 10+10;
}
export default Header;