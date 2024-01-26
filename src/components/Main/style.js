import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
  },
  inpt: {
    backgroundColor: 'white',
    marginBottom: 20,
    width: 350,
    height: 50,
    borderRadius: 10,
  },
  label: {
    textAlign: 'justify',
    fontStyle: 'italic',
    color: 'white',
    fontSize: 20,
    marginBottom: 8,
  },
  botao: {
    height: 70,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 100,
    margin: 20,
  },

  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  modalImage: {
    marginTop: 100,
    marginLeft: 50,
  },
  modalLabel: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'green',
    fontSize: 30,
    marginTop: 20,
  },
  modalTitlePreco: {
    textAlign: 'center',
    color: 'orange',
    fontSize: 22,
    marginTop: 20,
    marginBottom: 5,
  },
  modalDetails: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  modalBotao: {
    height: 70,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    margin: 50,
    borderRadius: 100,
  },
});

export default styles;
