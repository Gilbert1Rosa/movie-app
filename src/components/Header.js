function Header(props) {
    const { onSearch, handleOnChange } = props;
    return (
        <header className="secondary">
            <div className="search-bar">
                <form onSubmit={onSearch}>
                    <input className="search"
                        type="search"
                        placeholder="Buscar..."
                        onChange={handleOnChange}/>
                </form>
            </div>
        </header>
    )
}

export default Header;