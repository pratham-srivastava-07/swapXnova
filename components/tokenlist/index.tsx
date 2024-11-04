export default function TokenList({tokenDate, setOpenTokenBox}: {tokenDate: string, setOpenTokenBox: () => {}}) {
    return <div>
        <div>
            <p onClick={() => setOpenTokenBox(false)}></p>
        </div>
    </div>
}