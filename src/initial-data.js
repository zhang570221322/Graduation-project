const initialData = {

  tasks: {
    'task-1': {id: 'task-1', content: 'Data'},
    'task-2': {id: 'task-2', content: 'Batch'},
    'task-3': {id: 'task-3', content: 'Normalization'},
    'task-4': {id: 'task-4', content: 'Combat_Nor_Correction'}, 
    'task-5': {id: 'task-5', content: 'MNN_Nor_Correction'},
    'task-6': {id: 'task-6', content: 'CCA_Nor_Correction'},
    'task-7': {id: 'task-7', content: '01.VST'},
    'task-8': {id: 'task-8', content: '01.T-SNE'},
    'task-9': {id: 'task-9', content: '01.OverLap'},
    'task-10': {id: 'task-10', content: '02.CPM'},
    'task-11': {id: 'task-11', content: '03.Combat'},
    'task-12': {id: 'task-12', content: '03.MNN'},
    'task-13': {id: 'task-13', content: '03.CCA'},
    'task-14': {id: 'task-14', content: '04.kBET'},
    'task-100': {id: 'task-100', content:  require("./images/rules.png")},

     
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: '00.Input',
      taskIds: ['task-1', 'task-2']
    },
    'column-2': {
      id: 'column-2',
      title: '01.PreHandle',
      taskIds: ['task-7', 'task-8','task-9']
    },
    'column-3': {
      id: 'column-3',
      title: '02.Normalization',
      taskIds: ['task-10',]
    },
    'column-4': {
      id: 'column-4',
      title: '03.Correction_batch',
      taskIds: ['task-11', 'task-12', 'task-13']
    },
    'column-5': {
      id: 'column-5',
      title: '04.Assessment',
      taskIds: ['task-14']
    },
    'column-6': {
      id: 'column-6',
      title: '05.Output',
      taskIds: ["task-100"]
    },
    'column-7': {
      id: 'column-7',
      title: 'Process',
      taskIds: []
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3','column-4','column-5','column-6','column-7']
};

export default initialData
