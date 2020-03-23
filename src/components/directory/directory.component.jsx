import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';
import DIRECTORY_DATA from './directory.data';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: DIRECTORY_DATA,
        };
    }

    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(
                        ({id, ...otherSecrionProps}) => (
                            <MenuItem key={id} {...otherSecrionProps}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default Directory;