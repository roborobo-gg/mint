import React, { Fragment, useState } from "react";
import "./MintButton.css";

import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";

const MintButton = props => {
    const [openToaster, setOpenToaster] = useState(false);
    const [loading, setLoading] = useState(false);

    const wallet = "addr_exemplo";

    const copyMintAddress = async () => {
        setLoading(true);

        await navigator.clipboard.writeText(wallet);

        setOpenToaster(true);
        setLoading(false);
        //window.open(`${nftMakerBaseUrl}?p=${projectId}&c=${props.quantity}`, "_blank")
    }


    const handleClose = () => {
        setOpenToaster(false);
    }

    return (
        <Fragment>
            <p className="mint-address">{wallet}</p>
            <div className="mint-button"> 
                <Button onClick={ copyMintAddress } variant="contained" disabled={loading}>{ loading ? 'a copiar...' : 'Copy Mint Address!' }</Button>
                <Snackbar open={openToaster} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={3000} onClose={handleClose} message='Address copied to the clipboard!'><Alert severity="success">Address copied to the clipboard!</Alert></Snackbar>
            </div>  
        </Fragment>
    );
  };
  
  export default MintButton;

