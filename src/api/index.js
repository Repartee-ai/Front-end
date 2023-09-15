const FetchRequest = async (url, method, header = {}, data = {}) => {
  const response = await fetch(url, {
    method: method,
    headers: header,
    body: JSON.stringify(data),
  });
  return response.json();
};

export async function registerUser(email, password, additionalData = {}) {
  const requestBody = {
    email: email,
    password: password,
    ...additionalData,
  };

  return FetchRequest(
    "http://localhost:8000/users/register/",
    "POST",
    {
      "Content-Type": "application/json",
    },
    requestBody
  );
}

export async function logoutUser() {
  return FetchRequest("http://localhost:8000/users/logout/", "POST");
}

export async function loginUser(email, password) {
  const requestBody = {
    email: email,
    password: password,
  };

  return FetchRequest(
    "http://localhost:8000/users/login/",
    "POST",
    {
      "Content-Type": "application/json",
    },
    requestBody
  );
}

export async function loginProvider(email, password) {
  const requestBody = {
    email: email,
    password: password,
  };

  return FetchRequest(
    "http://localhost:8000/provider/login/",
    "POST",
    {
      "Content-Type": "application/json",
    },
    requestBody
  );
}
export async function getVmStatus(clusterId, namespace, vmName) {
  const requestBody = {
    clusterid: clusterId,
    namespace: namespace,
    vmName: vmName,
  };

  return FetchRequest(
    `http://localhost:8000/instances/${clusterId}/getvmstatus/${namespace}/${vmName}`,
    "POST",
    {
      "Content-Type": "application/json",
    },
    requestBody
  );
}

export async function getUserInstances(email) {
  return FetchRequest(
    `http://localhost:8000/instances/${email}/get_instances/`,
    "GET",
    {
      "Content-Type": "application/json",
    }
  );
}

export async function getInvoiceByUser() {
  return FetchRequest(
    "http://localhost:8000/invoices/get_user_invoices/",
    "GET",
    {
      "Content-Type": "application/json",
    }
  );
}
