export default {
    menu: (provided: any, state: any) => ({
        ...provided,
        marginBottom: state.placement == 'top' ? 3 : 0,
        marginTop: state.placement == 'top' ? 0 : 3,
        borderBottomWidth: state.placement == 'top' ? 0 : 3,
        borderTopWidth: state.placement == 'top' ? 3 : 0,
        borderTopLeftRadius: state.placement == 'top' ? 4 : 0,
        borderTopRightRadius: state.placement == 'top' ? 4 : 0,
        borderBottomLeftRadius: state.placement == 'top' ? 0 : 4,
        borderBottomRightRadius: state.placement == 'top' ? 0 : 4,
    })
}