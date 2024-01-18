

const titleWidthVar = {
    xs: 100,
    sm: 136,
}

export const tableRowAsPanelSx = {
    // fixing the issue
    // all good

    // FLEX STYLES ----
    // display: 'flex',
    // flex: 1,
    // flexWrap: 'wrap',
    // flexDirection: 'column',
    '& .MuiTableCell-root': {
        borderStyle: 'none',
        p: 1, 
        '& .MuiButtonBase-root': {
            px: 0
        }
    },
    '& .outerCell': {
        px: 1,
        py: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    "&:hover":{
        backgroundColor: 'transparent',
    }
}

export const cellSx = {
    // border: '1px solid blue !important'
    // border: '1px solid red !important',
}

export const titleSx = {
    minWidth: titleWidthVar,
    maxWidth: titleWidthVar, 
    p: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontWeight: 'bold'
}

export const detailsSx = {
    paddingBottom: '4px'
}