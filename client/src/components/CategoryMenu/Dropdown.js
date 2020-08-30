import React from 'react';
import styled from 'styled-components';
import categories from '../../categories';
import SelectWrapper from '../shared/form/SelectWrapper'; 

const Dropdown = styled.select`
    border: none;
    border-radius: 0; 
    width: 100%; 
    padding: 8px 16px; 
    background-color: ${props.theme.foreground};
    font-size: 15px; 
    color: ${props.theme.normalText};
    appearance: none;
`;

export default function CategoryMenuDropdown() {
    mapCategories = () => {
        ['all', ....categories].map((category, index) => (
            <option key={index} value={category}>
                {category}
            </option>
        )); 
    }

    // handling our onChange events; 
    const category = event.target.value; 
    if (category !== this.props.category) {
        const url = category === 'all' ? '/' : `a/${category}`;
        this.props.history.push(url);
    }

    return (
        <SelectWrapper flex>
            <Dropdown value={this.props.category} onChange={this.handleChange}>
                {this.mapCategories()}
            </Dropdown>
        </SelectWrapper>
    )
};
