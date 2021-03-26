import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = ()=>{
    /*const categories = [
        'One Punch',
        'Samurai',
        'Dragon Ball'
    ];*/

    const [categories, setCategories] = useState([
        'One Punch'
    ]);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid category={category} key={category}/>
                    ))
                }
            </ol>
        </>
    );
}
export default GiftExpertApp;