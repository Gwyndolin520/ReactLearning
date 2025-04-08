import React, { useState } from "react";
import { View, Text, Input, Button } from "@tarojs/components";
import "./index.scss";

const AccountBook = () => {
    const [records, setRecords] = useState([]);
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("expense");

    const handleAdd = () => {
        if (!amount) return;
        const newRecord = {
            id: Date.now(),
            amount: parseFloat(amount),
            type,
            date: new Date().toLocaleDateString()
        };
        setRecords([...records, newRecord]);
        setAmount("");
    };

    const total = records.reduce((sum, record) => {
        return sum + (record.type === "income" ? record.amount : -record.amount);
    }, 0);

    return (
        <View className="account-book">
            <View className="account-book__header">
                <Text className="account-book__balance">当前余额: ¥{total.toFixed(2)}</Text>
            </View>
            <View className="account-book__form">
                <Input
                    type="number"
                    value={amount}
                    onInput={e => setAmount(e.detail.value)}
                    placeholder="输入金额"
                />
                <View className="account-book__type">
                    <Button 
                        className={type === "expense" ? "active" : ""} 
                        onClick={() => setType("expense")}
                    >
                        支出
                    </Button>
                    <Button 
                        className={type === "income" ? "active" : ""} 
                        onClick={() => setType("income")}
                    >
                        收入
                    </Button>
                </View>
                <Button onClick={handleAdd}>添加记录</Button>
            </View>
            <View className="account-book__records">
                {records.map(record => (
                    <View key={record.id} className="record-item">
                        <Text>{record.date}</Text>
                        <Text className={record.type === "income" ? "income" : "expense"}>
                            {record.type === "income" ? "+" : "-"}¥{record.amount}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default AccountBook;