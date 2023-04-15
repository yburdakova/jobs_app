import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: SIZES.small,
        backgroundColor: "#FFF",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginLeft: SIZES.medium,
        marginBottom: SIZES.medium,
    },
    likeBtn: (like)=> ({
        width: 55,
        height: 55,
        borderWidth: 1,
        backgroundColor: like ?  "#F37453" : COLORS.white, 
        borderColor: like ? COLORS.white : "#F37453",
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    }),
    likeBtnImage: (like)=> ({
        width: "40%",
        height: "40%",
        tintColor: like ? COLORS.white : "#F37453",
    }),
    applyBtn: {
        flex: 1,
        backgroundColor: "#FE7654",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: SIZES.medium,
        borderRadius: SIZES.medium,
    },
    applyBtnText: {
        fontSize: SIZES.medium,
        color: COLORS.white,
        fontFamily: FONT.bold,
    },
});

export default styles;