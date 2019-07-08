


export const SUCCESS = {
  type: 'SUCCESS'
}

export const FAILURE = {
  type: 'FAILURE'
}

export const success_creator = (data) => {
  return {
    type: "SUCCESS_CREATOR",
    payload: data
 }
}

export const failure_creator = () => {
  return {
    type: "FAILURE_CREATOR"
  }
}
