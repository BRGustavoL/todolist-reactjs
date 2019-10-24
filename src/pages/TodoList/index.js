import React, { useState } from 'react';
import './styles.css';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

function Todo() {

  const [tarefas, setValues] = useState({
    titulo: '',
    descricao: '',
    prioridade: '',
  });

  const [listaTarefas, setTarefas] = useState([]);
  const handleChange = element => event => {
    setValues({ ...tarefas, [element]: event.target.value });
  };

  const adicionaTarefa = () => {
    if (tarefas.titulo != '' && tarefas.descricao != '') {
      setTarefas([...listaTarefas, {
        titulo: tarefas.titulo,
        descricao: tarefas.descricao,
        prioridade: tarefas.prioridade
      }]);
    }else { 
      alert('Há campos em branco! Verifique!');
    }
  }
  
  const validaTarefa = () => {
    let element = document.getElementById('id-list-item');
    listaTarefas.forEach(el => {
      if (el.prioridade == 'normal') return element.classList.add('list-item-normal');
      if (el.prioridade == 'medio') return element.classList.add('list-item-medio');
      if (el.prioridade == 'urgente') return element.classList.add('list-item-urgente');
      else return element.classList.add('list-item');
    });
  }
  
  return(
    <div>
      <div className="container">
        <Paper className="paper-header">
          <div className="todo-inputs">
            <TextField
              id="standard-titulo"
              label="Título"
              className="input"
              value={tarefas.titulo}
              onChange={handleChange('titulo')}
            />
            <TextField
              id="standard-descricao"
              label="Descrição"
              className="input"
              value={tarefas.descricao}
              onChange={handleChange('descricao')}
            />
          </div>
          <div className="radio-inputs">
            <RadioGroup name="prioridade" value={tarefas.prioridade} onChange={handleChange('prioridade')}>
              <FormControlLabel
                value="normal"
                control={<Radio color="primary" />}
                label="Normal"
                labelPlacement="start"
              />
              <FormControlLabel
                value="medio"
                control={<Radio color="primary" />}
                label="Médio"
                labelPlacement="start"
              />
              <FormControlLabel
                value="urgente"
                control={<Radio color="primary" />}
                label="Urgente"
                labelPlacement="start"
              />
            </RadioGroup>
          </div>
          <div className="btn-adicionar-tarefa">
            <Button variant="contained" color="primary" className="btn-add" onClick={adicionaTarefa}>
              Adicionar
            </Button>
          </div>
        </Paper>
        {
          listaTarefas.map(tarefa =>
            <Paper className="paper-list">
              <div id="id-list-item" className="">
                <p key={tarefa}>{tarefa.titulo}</p>
                <small>{tarefa.descricao}</small>
              </div>
            </Paper>
          )
        }  
      </div>
    </div>
  );
}

export default Todo;