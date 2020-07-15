import React, { useEffect, useState } from 'react';

import './Table.css';

const Table = () => {
    const [itemList, setItemList] = useState([]);

    const fetchData = async () => {
        const res = await fetch('https://abtestreal-server.herokuapp.com/api');
        res.json()
            .then(data => setItemList(data))
            .catch(err => console.log('Cannot get data, error: ', err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const tableList = () => {
        return itemList.map(currentItem => {
            return <TableItem values={ currentItem } key={ currentItem } />
        })
    }
    
    const TableItem = ({values}) => (
        <div className='table__item'>
            <div className='table__cell'>
                {values[0]}
            </div>
            <div className='table__cell'>
                {values[1]}
            </div>
        </div>
    );

    const Button = () => (
        <div className='table__button'>
            <div className='table__button-wrapper' onClick={ () => fetchData() }>
                Recalculate
            </div>     
        </div>
    );

    return(<>
        <div className='table'>
            <div className='table__item'>
                <div className='table__cell table__header'>
                    column 1
                </div>
                <div className='table__cell table__header'>
                    column 2
                </div>

            </div>
            { tableList() }
            
        </div>
        <Button />
        
    </>)
};

export default Table;