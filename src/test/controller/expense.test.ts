import sinon from 'sinon';
import { expect } from 'chai';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import * as expenseDatabase from '../../../src/database/expenseDatabase';
import * as expenseController from '../../../src/controllers/expenseController';
import { Request, Response } from 'express';
import { ExpenseReqBody, ExpenseReturn } from '../mocks/expenseMock';

chai.use(sinonChai);

const res = {
  status: sinon.stub().returnsThis(),
  json: sinon.stub().returnsThis(),
};

describe('Teste de unidade do user controller', function() {
  afterEach(sinon.restore);

  it('realizando cadastro de despesa', async () => {
    sinon
      .stub(expenseDatabase, 'CreateExpenseDatabase')
      .resolves(ExpenseReturn);
    

    const req = { body: ExpenseReqBody };

    await expenseController.CreateExpense(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(201);
  });
})