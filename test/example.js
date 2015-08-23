import Example from '../src/example'

describe('ES6 Foo', function () {
  let example;

  beforeEach(()=>{
    example = new Example();
  });

  it('should spy plus fn', ()=>{
    const spy = sinon.spy(example, 'plus')

    expect(example.plus(2, 4)).toEqual(6)
    expect(spy.getCall(0).args[0]).toEqual(2);
    expect(spy.getCall(0).args[1]).toEqual(4);
  });

  it('should stub plus fn', ()=>{
    const stub = sinon.stub(example, 'plus')
    stub.withArgs(2, 2).returns(44)
    stub.withArgs().throws(new Error('Very bad error'))

    expect(example.plus(2, 2)).toEqual(44)
    expect(example.plus).toThrowError('Very bad error')
  });

  it('should mock plus fn', ()=>{
    const mock = sinon.mock(example).expects('plus').twice()

    example.plus(2, 2)
    example.plus(2, 2)
    mock.verify()
  });

});
