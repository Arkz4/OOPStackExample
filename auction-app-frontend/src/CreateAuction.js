import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CreateAuction() {
const [itemName, setItemName] = useState('');
const [decription, setItemDescription] = useState('');
const [endDateTime, setEndDateTime] = useState('');
const [response, setResponse] = useState('');

const handleAuctionSubmtit = async (e) => {
    e.preventDefault();

try {
    const response = await axios.post(`http://localhost:3000/auctions/${id}/bid`, {
       itemName, description, endDateTime
    });
    setResponse(result.data);
    if (response.data.success) {
        alert('Your auction was created successfully, AuctionID: $(result.data.auctionId')
    } else {
     
    }

} catch(error) {
    console.error('Error saving auction :', error);
    setErrorMessage('an error occured while saving the auction.');
}
}

}

export default CreateAuction;