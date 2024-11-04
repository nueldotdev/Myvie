import { StyleSheet } from "react-native";


const allStyles = StyleSheet.create({

  contained: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },


  button: {
    width: '100%',
    textAlign: 'center',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 2
  },

  btnMain: {
    backgroundColor: '#FFD700',
    borderColor: '#FFD700',
  },

  buttonText: {
    color: '#2C2C2C',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: 3,
  },

  backBtn: {
    position: "absolute",
    top: 30,
    left: 20,
    color: '#9A9696',
  }
})


const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },

  authBgImg: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  imageStyle: {
    alignSelf: 'center',
  },

  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 5,
    width: '100%'
    // padding:,
  },

  text: {
    color: "#FBFAF5",
    fontSize: 24,
    // fontWeight: "bold"
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },

  buttonSect: {
    width: '90%',
    marginVertical: 30,
  },

  button: {
    width: '100%',
    textAlign: 'center',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 2
  },

  buttonText: {
    color: '#2C2C2C',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: 8,
  },

  regBtn: {
    backgroundColor: '#FFD700',
    borderColor: '#FFD700',
  },

  loginBtn: {
    backgroundColor: '#2C2C2C',
    borderColor: '#2C2C2C',
  },

  loginBtnText: {
    color: "#F4F4F4",
  },

  end: {
    height: 0
  }
});


const loginStyles = StyleSheet.create({
  input: {
    backgroundColor: '#1F1F1F',
    color: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '100%',
    fontSize: 18,
    outlineStyle: 'none',
    borderWidth: 0,
    fontFamily: 'Poppins',
  },

  text: {
    color: "#fff"
  },

  container: {
    flex: 1,
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  formSection: {
    // borderWidth: 2,
    // borderColor: "red",
    width: "90%",
    height: 'auto',
    borderRadius: 15,
    rowGap: 35
    // backgroundColor: '#2C2C2C',
  },

  logoCont: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
  },

  headerText: {
    color: '#F4F4F4',
    fontSize: 20,
  },

  subText: {
    color: '#9A9696',
    fontSize: 16,
    textAlign: 'center'
  },

  formMain: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 16,
    // width: '100%',
    // padding:
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.122)',
  },

  buttonSect: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  forgotText: {
    color: '#9A9696',
    fontSize: 16,
    marginTop: 10,
  }
});

export { authStyles, loginStyles, allStyles };