import React from 'react'
import Tag from '../surveys/Tag'

function SignUpTag(props) {
    const addClick = (data) => {
        props.setcateitems([...props.cateitems, data])
        console.log(props.cateitems)
    }

    const subClick = (data) => {
        props.setcateitems(props.cateitems.filter(item => item !== data))
        console.log(props.cateitems)
    }

    const addItemClick = (data) => {
        props.settagitems([...props.tagitems, data])
        console.log(props.tagitems)
    }

    const subItemClick = (data) => {
        props.settagitems(props.tagitems.filter(item => item !== data))
        console.log(props.tagitems)
    }

    const submitClick = (e) => {
        e.preventDefault();
        console.log(props.cateitems)
        console.log(props.tagitems)
    }
    
    const items = (Data) => {

        return Data.map(item => {
                return <Tag key={item} data={item} addClick={addClick} subClick={subClick}></Tag>
            }
            
        )
    }
    const dataset = {"game":["리그오브레전드","하스스톤","스타크래프트"],"channel":["풍월량", "얍얍", "대도서관"],"공중파":["예능","드라마","실시간뉴스"]}
    
    const itemlist = (cateitems) => {
        return cateitems.map(category => {
            if(dataset[category]){
                
                return dataset[category].map(item => {
                    console.log(item)
                    return <Tag key={item} data={item} addClick={addItemClick} subClick={subItemClick}></Tag>
                })
            }
        })
    }

    return (
        <div className="account">
                <div className="account__form">
                    <form onSubmit={props.onSubmit}>
                        <div className="box">
                            <div className="account__head">
                            <h2>라이브 선택</h2>
                            </div>
                            <div className="account__field">
                                <label htmlFor="username" className="hidden">태그 선택</label>
                            </div>
                            <div className="account__field">
                                {items(["game","channel","공중파"])}
                                {itemlist(props.cateitems)}
                                <button
                                type="submit"
                                className="btn btn__block btn__gradient--primary"
                                >
                                <strong>가입하기</strong>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default SignUpTag
