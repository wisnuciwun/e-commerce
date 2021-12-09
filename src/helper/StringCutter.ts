interface StringData {
    maxlength: number,
    text: string
}

export default function StringCutter(props: StringData) {
    let textlength = props.text.length
    let texts = props.text
    if(textlength > props.maxlength){
        let newName = props.text.split('').splice(0,props.maxlength)
        texts = newName.join('')+'...'
    }
    return texts
}