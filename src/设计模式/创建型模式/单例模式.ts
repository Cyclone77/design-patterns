/**
 * 单例模式是一种创建型设计模式， 让你能够保证一个类只有一个实例， 并提供一个访问该实例的全局节点。
 *
 * 数据库类会对`getInstance（获取实例）`方法进行定义以让客户端在程序各处都能访问相同的数据库连接实例。
 */
class Singleton {
    private static instance: Singleton;

    /**
     * 当构造函数修饰为 private 时，该类不允许被继承或者实例化：
     *
     * 单例的构造函数必须永远是私有类型，以防止使用`new`运算符直接调用构造方法。
     */
    private constructor() {}

    /**
     * 部分初始化代码（例如到数据库服务器的实际连接）。
     *
     * 用于控制对单例实例的访问权限的静态方法。
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    /**
     * 最后，任何单例都必须定义一些可在其实例上执行的业务逻辑。
     */
    public someBusinessLogic() {
        // 比如应用的所有数据库查询请求都需要通过该方法进行。因此，你可以
        // 在这里添加限流或缓冲逻辑。
        // ...
    }
}

/**
 * The client code.
 */
function clientCode() {
    const s1: Singleton = Singleton.getInstance();
    const s2: Singleton = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();
