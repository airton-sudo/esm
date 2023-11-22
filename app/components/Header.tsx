export default function Header() {
    return (
        <header className="text-center py-8 border-b border-[#4d4d4d] md:flex itens-center justify-between">
            <h4 style={{ color: "black", fontSize: "2.1em", fontFamily: "Arial", paddingLeft: "20px" }}>escolahightech</h4>
            <nav>
                <a className="hover:text-[#00e77f]" href="#" style={{ marginRight: "100px" }}>
                    Home  
                </a>
                <a className="hover:text-[#00e77f]" href="#sobre-nos" style={{ marginRight: "100px" }}>
                    Sobre Nós  
                </a>
                <a className="hover:text-[#00e77f]" href="#contato" style={{ marginRight: "100px" }}>
                    Contato  {" "}
                </a>
                <a className="hover:text-[#00e77f]" href="#" style={{ marginRight: "100px" }}>
                    Login  
                </a>
            </nav>
        </header>
    )
}
